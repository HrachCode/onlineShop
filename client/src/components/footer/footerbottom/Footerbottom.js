import React,{Component} from 'react';
import './Footerbottom.scss'

export default class Footerbottom extends Component{
    render() {
        return(
            <div className={'footerb'}>
                <div className={'newsletter'}>
                    <div className={'newscontain'}>
                        <h2>SIGN UP FOR NEWSLETTER !</h2>
                        <div className={'mailsub'}>
                            <form className={'mailform'} action="">
                                <input type="email" placeholder={'Enter your email...'} className={'footermail'} />
                                <input type="submit" value={'SUBMIT'} className={'mailsubmit'}/>
                            </form>
                            </div>
                    </div>
                </div>
                <div className={'rights'}>
                    <p>© 2019 Elite shoppy. All rights reserved | Designed by <b>Alcyonsystems</b></p>
                </div>
            </div>
        )
    }
}