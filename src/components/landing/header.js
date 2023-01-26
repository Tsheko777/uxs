import { ValidateURL } from '../../models/validateURL'
import { PostURL } from '../../models/url'
import { useState } from 'react'
import ClipboardJS from 'clipboard'
import { BsClipboardCheck } from 'react-icons/bs'

export const Header = () => {
    new ClipboardJS('.clipboard');

    const [url, setUrl] = useState()

    const NewURL = async () => {
        const userInput = document.getElementById('url');
        const error = document.getElementById('error');
        const uri = document.getElementById('res');

        if (ValidateURL(userInput.value) === true) {
            await PostURL(userInput.value, setUrl, uri)
            document.getElementById('url').style.border = 'unset'
            error.innerHTML = ''
        }

        if (ValidateURL(userInput.value) === false) {
            document.getElementById('url').style.border = 'solid 1px red'
            error.innerHTML = 'Enter valid URL'
        }
    }

    return (
        <div className='col-12 col-lg-10 mx-auto header d-flex align-items-center'>
            <div className='row'>
                <h1 className='headerText'>MAXIMIZE LEADS<br />
                    WITH <span className='span'>CUSTOMIZED</span> URL</h1>
                <p>With our tool, you can easily take any long and cumbersome URL and turn it into a shorter, more manageable link.</p>

                <div id='newUrl' className='row m-0'>
                    <div className='col-md-10 m-0 p-0'>
                        <input id='url' className='form-control' placeholder='Place your url here'></input>
                    </div>
                    <div className='col-md-2 p-0'>
                        <button onClick={() => NewURL()} className='btn shorten ms-md-2 mt-2 mt-md-0'>SHORTEN</button>
                    </div>
                </div>

                <div id='urlResult' className='row m-0 mt-2 d-none'>
                    <div className='col-md-10 m-0 p-0'>
                        <input readOnly id='res' className='form-control'></input>
                    </div>
                    <div className='col-md-2 p-0'>
                        <button data-clipboard-target='#res' className='btn clipboard shorten ms-md-2 mt-2 mt-md-0'><BsClipboardCheck size={20} color={'#fff'} /></button>
                    </div>
                </div>

                <p className='mt-2' id='error'></p>
            </div>
        </div >
    )
}