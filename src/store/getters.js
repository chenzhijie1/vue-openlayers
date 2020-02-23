export default{
    parseData(state) { return (id) => {
		
	//console.log(state.data.find(todo => todo.provinceShortName == id))
	var city= state.data.find(todo => todo.provinceShortName == id)
	if(city!==undefined) {return city["confirmedCount"]}
	else {return ""}
	 
  }} ,
  
  parseProvince(){
	  
  }
  
  //  Goods{
  //     constructor(itemInfo, columns, services){
  //         this.title = itemInfo.title;
  //         this.desc = itemInfo.desc;
  //         this.newPrice = itemInfo.price;
  //         this.oldPrice = itemInfo.oldPrice;
  //         this.discount = itemInfo.discountDesc;
  //         this.columns = columns;
  //         this.services = services;
  //         this.realPrice = itemInfo.lowNowPrice;
  //     }
  // }
}