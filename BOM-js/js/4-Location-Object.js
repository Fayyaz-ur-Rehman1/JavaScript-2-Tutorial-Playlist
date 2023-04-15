console.log(location.href);
console.log(location.pathname);
console.log(location.protocol);


// ridirect

function  fn(){
    window.location = "https://www.google.com";
};


function  fn1(){
    location.href = "https://www.google.com";
};


function  fn2(){
    location.assign("https://www.google.com");
};

function fn3(){
    location.replace("https://www.google.com");
};

function fn4(){
    location.reload();
};