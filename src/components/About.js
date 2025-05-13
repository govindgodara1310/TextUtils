import React from 'react'

export default function About(props) {



    const myStyle = {
        color: props.mode === 'dark'?'white':'#001c35',
        backgroundColor: props.mode === 'dark'?'rgb(36, 74, 104)':'white',
        border: '1px solid white'
    };

    // const [btnText,setBtntext] = useState("Enable Dark mode");
    // const btnclick=()=>{
    //     if(myStyle.color === 'white'){
    //         setmyStyle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //             border: '1px solid white'
    //         })
    //         setBtntext("Enable Dark mode")
    //     }else{
    //         setmyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setBtntext("Enable Light mode");
    //     }
    // }

    return (
        <div className='container' style={{color: props.mode === 'dark'?'white':'#001c35'}}>
            <h1 className='my-2'>About us</h1>
            <div class="accordion" id="accordionExample" style={myStyle}>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" style={myStyle}  type="button"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze your text</strong>
                            
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body" style={myStyle
                        }>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use </strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body" style={myStyle}>
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong> Browser compatible </strong>
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse"  data-bs-parent="#accordionExample">
                        <div class="accordion-body" style={myStyle}>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-3">
                <button onClick={btnclick} type="button" className="btn btn-primary">{btnText}</button>
            </div> */}
        </div>
    )
}
