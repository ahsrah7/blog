import { Hono } from 'hono';
import { verify } from 'hono/jwt';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { createBlogInput,updateBlogInput } from '@_pointer/blog';



export const blogRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string,
    JWT_SECRET: string
	},
    Variables: {
        userId: string
    }
}>();



blogRouter.use('/*', async (c, next) => {
    const jwt = c.req.header('Authorization');
      if (!jwt) {
          c.status(401);
          return c.json({ error: "unauthorized" });
      }
      const token = jwt.split(' ')[1];
      const payload = await verify(token, c.env.JWT_SECRET);
      
      if (!payload) {
          c.status(401);
          return c.json({ error: "unauthorized" });
      }
      c.set('userId', payload.id);
      await next()
  })
  

  blogRouter.get('/bulk', async (c) =>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
      }).$extends(withAccelerate());

      const blogs = await prisma.post.findMany(
        {
            select:{
                id:true,
                title:true,
                content:true,
                author:{
                    select:{
                        name:true
                    }
                }
            }
        }
      );

      return c.json({
        blogs
      })
    
})
  
blogRouter.get('/:id', async (c) => {
    const id = c.req.param("id")
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
      }).$extends(withAccelerate());
    
      
      try{
        const blog = await prisma.post.findFirst({
            where:{
                id:id
            },
            select:{
                id:true,
                title:true,
                content:true,
                author:{
                    select:{
                        name:true
                    }
                }
            }
        })
    
        return c.json({blog});
      }catch(e){
        c.status(400);
          return c.json({ error: "error while fetching" });
      }
     
})
  
  

  
  
  
blogRouter.post('/', async (c) =>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
      }).$extends(withAccelerate());
    
      const body = await c.req.json();
      const {success,error} = createBlogInput.safeParse(body);
    if(!success){
        c.status(411)
        return c.json({error:error})
    }
      const userId = c.get("userId")
      const blog = await prisma.post.create({
        data:{
            title: body.title,
            content: body.content,
            authorId: userId
        }
    })

    return c.json({id:blog.id});
})
  
  
blogRouter.put('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
      }).$extends(withAccelerate());
    
      const body = await c.req.json();
      const {success,error} = updateBlogInput.safeParse(body);
      if(!success){
          c.status(411)
          return c.json({error:error})
      }
      const blog = await prisma.post.update({
        where:{id:body.id},
        data:{
            title: body.title,
            content: body.content,
        }
    })

    return c.json({id:blog.id});
})