function inc_opac(targ){
    let dis=targ.parentNode;
    
    targ.firstChild.style.display="none";
    console.log(dis.firstChild);
    dis.firstChild.style.opacity="1";
    
}

function out_opac(targ){
    let dis=targ.parentNode;
    
    targ.firstChild.style.display="unset";
    dis.firstChild.style.opacity="0.5";
    
   
}

function inc2_opac(targ){
    console.log(targ)
   
    
   
    
    targ.firstChild.style.display="none";
    
    document.getElementById('pain').style.opacity="1";
    
}

function out2_opac(targ){
    let dis=targ.parentNode;
    
    targ.firstChild.style.display="unset";
    document.getElementById('pain').style.opacity="0.5";
    
   
}