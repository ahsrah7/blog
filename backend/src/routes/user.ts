import { Hono } from 'hono'
import { sign } from 'hono/jwt';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { signupInput,signinInput } from '@_pointer/blog';

export const userRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string,
        JWT_SECRET: string
	}
}>();



userRouter.post('/signup', async (c) =>{
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const body = await c.req.json();
    const {success,error} = signupInput.safeParse(body);
    console.log(signupInput.safeParse(body));
    
    if(!success){
        c.status(411)
        return c.json({error:error})
    }
    try{
  
      const myText = new TextEncoder().encode(body.password);
      const myDigest = await crypto.subtle.digest(
        {
          name: 'SHA-256',
        },
        myText 
      );
      const enc = new TextDecoder("utf-8");
      const hashedPassword =[...new Uint8Array(myDigest)]
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
      const user  = await prisma.user.create({
        data:{
          email: body.email,
          password: hashedPassword
        }
      })
     
      
      const token = await sign({id:user.id},c.env?.JWT_SECRET)
      return c.json({token})
    }catch(e){
      c.status(403);
          return c.json({ error: "error while signing up" });
    }
    
  })
  
  
  userRouter.post('/signin', async (c) =>{
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const body = await c.req.json();
    const {success,error} = signinInput.safeParse(body);
    if(!success){
        c.status(411)
        return c.json({error:error})
    }
    
    try{
      // find the user
      const user = await prisma.user.findUnique(
        {
          where:{
            email: body.email
          }});
      
  
          if(!user){
            c.status(401);
            return c.json({ error: "Incorrect credentials" });
          }
      
      const myText = new TextEncoder().encode(body.password);
      const myDigest = await crypto.subtle.digest(
        {
          name: 'SHA-256',
        },
        myText 
      );
      const enc = new TextDecoder("utf-8");
      const hashedPassword = [...new Uint8Array(myDigest)]
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
  
      if(user?.password != hashedPassword){
        c.status(401);
        return c.json({ error: "Incorrect credentials" });
      }
      console.log(user,"-------------------");
      const token = await sign({id:user.id},c.env?.JWT_SECRET)
      return c.json({token})
  
    }catch(e){
      c.status(403);
          return c.json({ error: "error while signing in" });
    }
    
  })
  

