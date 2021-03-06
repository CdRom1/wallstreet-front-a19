//refer to variables managed by external css
const textGreen  = {
	color: 'var(--price-green)',
};
const textRed  = {
	color: 'var(--price-red)',
};
const textWhite  = {
	color: 'var(--price-white)',
};

class Prix extends React.Component {
constructor (props){
	super (props);
	this.state = {evolution : "const", prix: 0};
	//"up" : augmentation, "down": diminution, "const": statique

}
getColorFromEvolution(evolution){
	if(evolution == 0)
		return (textWhite);
	if(evolution == -1)
		return (textRed);
	else
		return (textGreen);
}

render(){
	return(
		<tr className="articleLine" style={{fontSize: this.props.magicalSize + "px"}}><td className="article articleName">{this.props.nom}</td><td className="article articlePrice">{Math.floor(this.props.prix/100)}, {this.props.prix % 100} €</td><td><div style={{height: this.props.magicalSize + 2 + "px", width: this.props.magicalSize + 2 + "px"}} className={"priceArrow priceArrow" + this.state.evolution}></div></td></tr>);
}



static getDerivedStateFromProps(nextProps, prevState){
	if (nextProps.prix > prevState.prix){
		return({evolution: "up", prix: nextProps.prix} );
	}
	else if (nextProps.prix < prevState.prix) {
		return( {evolution: "down", prix: nextProps.prix} );
	}
	else {
		return( {evolution: "const"} );
	}
}

shouldComponentUpdate(nextProps, nextState) {
return(this.state.evolution !== nextState.evolution || this.props.prix !== nextProps.prix);
}

}

export {Prix};
