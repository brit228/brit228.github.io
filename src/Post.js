import React from 'react';
import Markdown from 'react-markdown';
import templateTop from './pug/postTop.pug';
import templateBot from './pug/postBot.pug';
import data from './data.json';


class Post extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      md: ""
    };
  }

  componentDidMount() {
    document.title = "Michael Beck Portfolio | " + data.posts[this.props.match.params.id].title;
    fetch('/md/'+this.props.match.params.id+'.md')
        .then((r) => r.text())
        .then(text => {
          this.setState({md: text});
        });
  }
  
  render() {
    var bgStyle = {
      backgroundImage: 'url('+data.posts[this.props.match.params.id].mainImg+')'
    };
    return <div>
        {templateTop.call(this, data.posts[this.props.match.params.id])}
        <section id='home' className='home-section'>
          <div className='home-section__bg' style={bgStyle}></div>
          <div className='home-section__overlay'>
            <div className='container'>
              <header className='home-section__header'>
                <h1>{data.posts[this.props.match.params.id].title}</h1>
                <h2>{data.posts[this.props.match.params.id].subtitle}</h2>
                <h2>{data.posts[this.props.match.params.id].date}</h2>
              </header>
            </div>
          </div>
        </section>
        <section className="common-section" id="body">
          <div className="container">
            <Markdown source={this.state.md} />
          </div>
        </section>
        <section className="common-section" id="spacer"></section>
        {templateBot.call(this, data.posts[this.props.match.params.id])}
      </div>;
  }
}

export default Post;
