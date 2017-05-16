window.onload=function(){
	new Vue({
	el: "#app",
	data:{
		myList:[""],
		a:50,
		checkAll:false,
		totalmenoy:0
	},
	filters:{
		money:function(value){
			return "￥"+value.toFixed(2);
		}
	},
	mounted:function(){
		this.$nextTick(function(){
			this.view();
		});
	},
	methods:{
		view:function(){
			var _this=this;
			this.$http.get("data/data.json").then(function(res){
				_this.myList=res.body.result.li;
			});
		},
		add:function(list,way){
			if(way>0)
			list.quentity++;
			else list.quentity--;
			if(list.quentity<0)
				list.quentity=0;
			this.calc();
		},
		checkall:function(){
			this.checkAll=!this.checkAll;
			ck=this.checkAll;
				this.myList.forEach(function(v,k){
					v.checked=ck;
				})
			this.calc();
		},
		jianchaCheck:function(item){
			item.checked=!item.checked;
			for(v in this.myList){
					if(this.myList[v].checked==false){
					this.checkAll=false;
					break;
					}
					this.checkAll=true;
				}
				this.calc();
		},
		calc:function(){
			let sum=0;
			for(v in this.myList){
				if(this.myList[v].checked)
					sum+=this.myList[v].price*this.myList[v].quentity;
			}
			this.totalmenoy=sum;
		},
		del:function(index){
			if(confirm("确定要进行此操作吗？")){
				if(index==-1)
				for(v in this.myList){
					if(this.myList[v].checked)
						this.myList.splice(v,1);
				}
				else  this.myList.splice(index,1);
			}
		}
	}

	
})
}
