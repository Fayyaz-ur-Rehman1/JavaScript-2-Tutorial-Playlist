let a = 'HELLO BRO';
let b = "HY BROTHER";
console.log(a + b);

var c = ` ${a} ${b} My Name Is Fayyazurrehman`;
console.log(c);

let d = "my nae is => \n Fayyazurrehman";
console.log(d);

let e = "my name is\tfayyaz urrehman";
console.log(e);

let f = "Hello how are u \\Guys";
console.log(f);

let g = "my name is \"fayyaz ";
console.log(g);

let h = "Hello how are u \\\\Guys";
console.log(h);


let i = "Hello man";
let j = "Hello Man ki Women";
console.log(i + " " + j)

let k = "fayyazurrehman";
console.log(k.length);

let n = "my name is fayyaz khilji"
console.log(n[3])

let l = "Uzairkhilji";
if (l == "Uzairkhilji") {
    console.log("Rigth Name");
} else {
    console.log("Worng Name")
}

let m = "Uzairkhilji";
if (m == "uzairkhilji") {
    console.log("Rigth Name");
} else {
    console.log("Worng Name")
}

// concat()

let o = 'fayyazurrehman';
let p = "danishchouhan";
let q = o.concat(" " ,p);
console.log(q);

// substr()

let r = "my name is fayyazurrehman";
console.log(r.substr(11,14));

// substring()

let u = "Hello Guys";
console.log(u.substring(6 ,11));

// indexOf()

let s = "Hello People How Are u";
console.log(s.indexOf('How'));

let t = "Hello People How Are u People";
console.log(t.indexOf("People" , 7));

let w = "Hello People How Are u People";
console.log(w.indexOf("peopleee"));

// lastIndexOf()

let v = "Hello People How Are u";
console.log(v.lastIndexOf('How'));

let x = "Hello People How Are u People";
console.log(x.lastIndexOf("People",7));

let y = "Hello People How Are u People";
console.log(y.lastIndexOf("peopleee"));

// trim()

let z = "     my name is fayyaz ur rehman.            ";
console.log(z);
console.log(z.trim());

let trimstrat = "       hello khilji     " ;
console.log(z.trimStart(trimstrat));


let trimleft = "       hello khilji     " ;
console.log(z.trimEnd(trimleft));

// tOUpperCase()

let  upper = "my name is fayyazurrehman";
console.log(upper.toUpperCase())

// toLowerCase()

let lower = "MY NAME IS FAYYAZURREHMAN";
console.log(lower.toLowerCase());

// replace()

let replace = "fayyazurrehman danishchouhan";
console.log(replace.replace("danishchouhan" , "fayyaz khilji"));

//  include()

let inc = "my name is ";
console.log(inc.includes("is"))

let incl = "my name is ";
console.log(incl.includes("jdfjd"))