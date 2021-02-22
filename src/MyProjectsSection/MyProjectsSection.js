import * as React from "react";

class Project extends React.Component{
    constructor(props){
        super();
        console.log(props);
        this.url = props.data.urL
    }
    render(){
        return( <li className="my-projects-item">
                  <span className="my-projects-text">
                     <a href="https://hellenglish.goit.education/"
                        className="my-projects-link">{this.url}</a>
                     ............
                     <span className="my-projects-bracket">[</span> HTML5, CSS3 <span
                      className="my-projects-bracket">]</span>
                  </span>
        </li>
        )

    }
}
class MyProjectsSection extends React.Component {
    constructor(){
        super();
        this.data = `[{"urL":"https://hellenglish.goit.education/","languages":["HTML5","CSS3"]},{"urL":"https://cryptohub.goit.education/","languages":["JavaScript"]},{"urL":"https://kidslike.goit.education/","languages":["React.js","Node.js"]}]`
        this.data = JSON.parse(this.data);
        console.log(this.data);
    }

    render(){
        const projects = this.data.map(function(val, key){
            return <Project data={val}/>
        })

        return(
            <div className="my-projects-section">
                <h3 className="main-content-title">Projects</h3>
                <ol className="my-projects-list">

                    {projects}
                </ol>
            </div>
        );
    }
}
 export default MyProjectsSection ;
