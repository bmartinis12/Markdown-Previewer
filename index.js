const homeState= `
This is example text
**Bold**
> Block Quotes!
# Heading
## Sub-Heading

[Google](https://www.google.com/maps)
         
This is an inline \`<div></div>\`
         
\`\`\`
  let x=2;
  let y=3;
  let z = y + z;
\`\`\`
         
![eye](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOoe7Zb-kHgpL7Jo_jOY7FI02yWF8jVIwxoQ&usqp=CAU)

- list item 1 
- list item 2

`;

class App extends React.Component{
  state ={
    text: homeState
  }
  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  render() {
    const { text } = this.state;
    const mdown = marked.parse(text, {breaks: true});
    return(
      <div className="text-center mt-4">
        <h1>Convert Your Markdown</h1> 
        <div className="row">
          <div className="col-6">
            <h5 className="text-center">Enter you text:</h5>
            <textarea class="form-control p-2" id="editor" value={text} onChange= {this.handleChange} />
          </div>
          <div className="col-6" >
            <h5 className="text-center">Results:</h5>
            <div className="preview rounded p-2" dangerouslySetInnerHTML={{__html: mdown}} id="preview"/>
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
