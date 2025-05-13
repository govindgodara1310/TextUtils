import React, { Component } from 'react';
import { withNavigation } from './withNavigation';

class LandingPage extends Component {
  handleclick = () => {
    this.props.navigate('/Home');
  };

  render() {
    return (
      <div style={styles.container}>
        <style>
          {`
            @media (max-width: 768px) {
              .content {
                flex-direction: column;
                text-align: center;
              }

              .text-section {
                width: 90%;
                padding: 1em;
              }

              .image-section {
                margin-top: 1em;
              }

              .heading {
                font-size: 2.5em !important;
              }

              .subheading {
                font-size: 2em !important;
              }

              .description {
                font-size: 1em;
              }

              .button {
                width: 60%;
              }
            }
          `}
        </style>

        <div className="content" style={styles.content}>
          <div className="text-section" style={styles.textSection}>
            <h1 className="heading" style={styles.heading}>Welcome to</h1>
            <h1 className="subheading" style={styles.subheading}>News Monkey</h1>
            <p className="description" style={styles.description}>
              With NewsMonkey, stay updated with the latest headlines, breaking news, and in-depth articles from around the world. Our news app delivers real-time updates, personalized notifications, and a sleek, user-friendly interface to keep you informed anytime, anywhere.
            </p>
            <button className="button" onClick={this.handleclick} style={styles.button}>Get News</button>
          </div>

          <div className="image-section" style={styles.imageSection}>
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.l6LlQIslc9tIgLLA0W9oJAHaEK&pid=Api&P=0&h=180"
              alt="News"
              style={styles.image}
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    backgroundColor: 'black',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '90%',
    flexWrap: 'wrap',
  },
  textSection: {
    color: 'white',
    width: '45%',
    minWidth: '300px',
  },
  heading: {
    fontSize: '4em',
    textShadow: '0 0 10px white',
  },
  subheading: {
    color: 'red',
    fontFamily: 'cursive',
    textShadow: '0 0 10px red',
    fontSize: '3em',
  },
  description: {
    paddingTop: '1em',
    fontSize: '1.2em',
    lineHeight: '1.6em',
  },
  button: {
    marginTop: '1.5em',
    padding: '0.8em 2em',
    backgroundColor: 'yellow',
    borderRadius: '30px',
    boxShadow: '0 0 10px yellow',
    fontSize: '1em',
    cursor: 'pointer',
    border: 'none',
  },
  imageSection: {
    marginLeft: '1em',
  },
  image: {
    height: '300px',
    maxWidth: '100%',
    borderRadius: '10px',
  },
};

export default withNavigation(LandingPage);


























// import React, { Component } from 'react';
// // import logo from './logo.png';
// import { withNavigation } from './withNavigation';

// class LandingPage extends Component {
// handleclick = () => {
//         this.props.navigate('/Home');
//     }
//   render() {
    

//     // const backgroundURL = "https://tse4.mm.bing.net/th?id=OIP.0VBNRlNjJfe7uL20iqU4cgHaEK&pid=Api&P=0&h=180"
//     return (
        
//         <div style={{
//             backgroundColor: "black",
//             // backgroundImage: `url(${backgroundURL})`, 
//             // backgroundSize: "cover",
//             // backgroundPosition: "center",
//             // backgroundRepeat: "no-repeat",
//             display: "flex",
//             height: "100vh",
//             width: "100vw",
//             justifyItems: "center",
//             alignItems: "center"

//         }}>
//         {/* <div style={{
//             display: "flex"
//         }}>
//             <h1 style={{color: "lightBlue", textShadow: "0 0 10px lightBlue"}}>Created by - </h1>
//             <h1 style={{color: "yellow", textShadow: "0 0 10px yellow"}}>Govind Godara</h1>
//         </div> */}
//         <div style={{ 
//             display: "flex",
//             justifyContent: "space-around",
//             alignItems: "center",
//             }}>
//                 <div style={{justifyItems: "center"}}>
//                     <h1 style={{fontSize:"500%", color: "white", textShadow: "0 0 10px white"}}>Welcome to</h1>
//                     <h1 style={{color: "red",textShadow: "0 0 10px red", fontFamily: "cursive"}}>News Monkey</h1>
//                     <div style={{color: "white", width: "50%",paddingTop: "20px"}}>
//                         <p>With NewsMonkey, Stay updated with the latest headlines, breaking news, and in-depth articles from around the world. Our news app delivers real-time updates, personalized notifications, and a sleek, user-friendly interface to keep you informed anytime, anywhere.</p>
//                     </div>
//                     <button onClick={this.handleclick}style={{color: "black",height: "150%",width: "130%", backgroundColor: "yellow", borderRadius: "30px", boxShadow: "0 0 10px yellow"}}>Get News</button>
//                 </div>
//                 <div style={{marginRight: "50px"}}>
//                     <img src="https://tse2.mm.bing.net/th?id=OIP.l6LlQIslc9tIgLLA0W9oJAHaEK&pid=Api&P=0&h=180"  height="400px"  alt="" />
//                 </div>
//         </div>
//         </div>
//     );
//     }
//     }
//     export default withNavigation(LandingPage);