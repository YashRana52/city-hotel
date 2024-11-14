import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
       
        unique:true,
        
    },
   email:{
        type:String,
        require:true,
        unique:true
    },
   password:{
        type:String,
        require:true,
     
    },
    avatar:{
        type:String,
        default:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAACUCAMAAADMOLmaAAAAM1BMVEX+/v68vb+9vb3Z2tu4ubu6urr5+fnt7e3z8/PHx8f29vbDw8Pj5ObX19ff39/q6urQ0NAZJraQAAAEE0lEQVR4nO2c3XLzKgxFAwYM2Py8/9N+4CRumhPHSGDhzvG6ayft7MFICGnHt9vFxcXFX0PpMcyJ0SrVW8t/scEZLh5IblywvSX9wrqJS8nZA87TT5M7z0LaKCRL8laFWSJnUsaTrKNngn1GMN9bXEJFuaFvIXZ/1Nb8bL+PGN1XoJq2nvDK1HUV7bSnL0vsGS/f9+C6F/sJ9Dt78IHoFtE6Z70iekVLLJPX7zmH3TBekaGLQlMskEnTQ+BYvoSMy7GDwrJM86TDTrRTYRzf6ZC2C3Phykyu0MEUCkctUAEieYG8gLCASL4vIvVGBKTrh0LqpO3BCqnLhwhVyKhDpbxqeEKds6GhnC4sl8I3Si4o1xr+/xRSxzI821Dnw/n0Zwr8XKa+B5y/tgHXh4a8wQSssckDJYVKaUfkAf09RQPveh1aN6e/L/+BnsPNADpLXfo2t1C+hp16X+r0/UNAD7bLLsycvo9dmHFEnzC5U3Q605/Ir9hJ7uxF0XXgk9Bnn+vtz0Z768tsN5nOMV++Lan7k0hxguHyyugmKfkr2efQLU9/xC4iVyYXzrN+PygdZu/9HLqH78XFBZAcvcM3cmR3yjtK+3SUlFym0oeMH4krnOzlkxJwHRViip4uTT68fLCuCEt/EUmufHY2Qi6HMEwgy2e14MPhh7WHjyl+IZg7dEfOdfLuyOOKsjFKUDdpAy6ngwrbgQObmlsKE0fcXkZAI6kAMbQWGHiLB/wqsfFudOD0ty+RN3zSyiHy3y5yapcbXdMt+EKrMwbuaSil0aBqOExgoxEB2LcCQTZojOnGWeaNBn4w2NgEQW20QE18cCqfs9prD9ZTaQgDj+IRTFUKK+vVImRNxgFP4lEKa6rFQ3PhE17TSXYEAhmviWa47wejsKIM0xSBku4t+HwzUghMCvGhQpENs0L82Xxk3fWqED+aPLxquCvk+FOFJFByQwedbkiWMCvEphtLozCVN1hDUyBTiE03nkwhNt04KoXoKXQ8urxewSZEQ6YQmxBh/r0qhbiEqOgUMlxvG+iBrAKXsnX7htwWyPbNSKcQaV2jVIirsi+Ff0shbh8SxjIy2wC//1sFchpJeOrhBBJWDtja5vz14UhWY2PbIopIYMVtlKR9yGRFV0QdNy97gde4jUkkVvWx04NuPfn+DeeyerTX2D3whpQNHA/KH6iQt/kKmnabb/SqQ5hmU3rtuFhMzK205f8luG9qxpgNb2h24GkDtrcFjYOBGPq+IWScj7FW6aHJhMX4I91p2kfDBdx+c/fiC0nilFR6XjyS5fvy/k2BvPco3aY2DNFM2UD6dXPmd0qmo9fEoc9bJe2YzcRPpe+k8n6Kzs9h7OUn/kElrNZheVNoIiRR2ubf9lZ2cXFxUcg/kwE4LhpQCrIAAAAASUVORK5CYII='
    },

},{timestamps:true})
const User = mongoose.model('User',userSchema)
export default User;