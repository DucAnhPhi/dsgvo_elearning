import React from 'react';

class QuizComp extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <form>
                {this.props.children}
                <input type="button" value="Beantworten" onClick=""/>
            </form>

        )
    }


}

export default QuizComp;