var React = require('react');
var ReactDOM = require('react-dom');
// var arr = [<li><img src='image/1.png'/></li>,
// 			<li><img src='image/2.png'/></li>,
// 			<li><img src='image/3.png'/></li>,
// 			<li><img src='image/4.png'/></li>,
// 			<li><img src='image/5.png'/></li>,
// 			<li><img src='image/6.png'/></li>,
// 			<li><img src='image/7.png'/></li>,
// 			<li><img src='image/8.png'/></li>,
// 			<li><img src='image/9.png'/></li>,
// 			<li><img src='image/10.png'/></li>,
// 			<li><img src='image/11.png'/></li>,
// 			<li><img src='image/12.png'/></li>,
// 			<li><img src='image/13.png'/></li>,
// 			<li><img src='image/14.png'/></li>,
// 			<li><img src='image/15.png'/></li>,
// 			<li><img src='image/16.png'/></li>,
// 			<li><img src='image/17.png'/></li>,
// 			<li><img src='image/18.png'/></li>,
// 			<li><img src='image/19.png'/></li>,
// 			<li><img src='image/20.png'/></li>];

var arr = [{id:1,name:'image/1.png'},
			{id:2,name:'image/2.png'},
			{id:3,name:'image/3.png'},
			{id:4,name:'image/4.png'},
			{id:5,name:'image/5.png'},
			{id:6,name:'image/6.png'},
			{id:7,name:'image/7.png'},
			{id:8,name:'image/8.png'},
			{id:9,name:'image/9.png'},
			{id:10,name:'image/10.png'},
			{id:11,name:'image/11.png'},
			{id:12,name:'image/12.png'},
			{id:13,name:'image/13.png'},
			{id:14,name:'image/14.png'},
			{id:15,name:'image/15.png'},
			{id:16,name:'image/16.png'},
			{id:17,name:'image/17.png'},
			{id:18,name:'image/18.png'},
			{id:19,name:'image/19.png'},
			{id:20,name:'image/20.png'},];

const list =  arr.map((arr) =>
		<li>
			<div>
				<div>
					<img src={arr.name} />
				</div>
				<div className="text">
					<button type="button" autofocus>{arr.id}</button>
				</div>
			</div>
		</li>
);

ReactDOM.render(
	<div>
		<ol className="wrap">
			{list}
		</ol>
	</div>,
	document.getElementById('root')
);