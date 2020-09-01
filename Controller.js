const express=require('express')
const cors=require('cors')
const bodyParser=require('body-parser')
const models =require('./models')
const app=express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
let user=models.User;
let role=models.Role;
let obra=models.Obra;


app.get('/create', async(req, res)=>{
    let cadastrar = await user.create({ 
        username: "", 
        email: "",
        password: "",
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
    });
    res.send("Agora foi");
})

app.get('/selected', async(req, res)=>{
    let select = await user.findAll();
    res.send(select);
})
app.get('/update', async(req, res)=>{
    let uptade = await user.findByPk(1).then((response)=>{
        response.password='';
        response.save();
    });
    res.send(select);
})

app.get('/delete', async(req, res)=>{
    await user.destroy({
        where: {
          username: ""
        }
      });
      res.send('deletado');
})

app.post('/login', async(req, res)=>{
   let response = await user.findOne({
       where:{username:req.body.username, password:req.body.password}
   })
   if(response === null){
       res.send(JSON.stringify('failed'))
   }else{
       res.send(response);
   }
})

let port=process.env.PORT || 3000;
app.listen(port,(req, res)=>{
    console.log('Servidor rodando');
})