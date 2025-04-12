
const handlerBarsContext = {
    "/index.html": {
        "todo": "Add some variables here for the partials",
        "index": "index.hbs",
       
    },
   
}

const pageContext = (page)=>{
    const context= {...handlerBarsContext[page]}
    return context;
}
export default pageContext;