 
 
 
 
 
 
 const getRoster = async () => {

    await fetch('/shift/2013-09-15')
    .then(res => res.json())
    .then(data => console.log(data));
}

getRoster();