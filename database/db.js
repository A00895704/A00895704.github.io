const {Pool} = require ('pg');

const pool = new Pool({
    host:'ec2-34-200-116-132.compute-1.amazonaws.com',
    user:'bnazibarppglxd',
    database:'dm7qd4s58e41t',
    password:'0830f0ec172c22354b49c4e04f975f11055654d71f26e8713292738f30ff9f93',
    port:5432,
    ssl:true
});

module.exports=pool;