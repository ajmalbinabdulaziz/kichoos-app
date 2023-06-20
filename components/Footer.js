import React from 'react'
import { SocialIcon } from 'react-social-icons'


const Footer = (props) => {
  return (
    <footer className="flex-row bg-[rgb(36,36,36)] text-center sticky bottom-0 p-10">
        <div className="text-white text-center font-bold text-xl p-2 cursor-pointer">
          <SocialIcon style={{ height: 45, width: 45, }} fgColor="#ffffff" bgColor="rgb(36,36,36)" network="email" url="" target="_blank"/>
           
           azhar878@gmail.com
        </div>
        <div className="flex flex-row justify-center space-x-5 p-0 m-0">
                <SocialIcon style={{ height: 45, width: 45, }} fgColor="#ffffff" bgColor="rgb(36,36,36)" network="youtube" url="https://youtube.com/c/AzharBinAbdulAziz" target="_blank"/>
                <SocialIcon style={{ height: 45, width: 45, }} fgColor="#ffffff" bgColor="rgb(36,36,36)" network="linkedin" url="https://linkedin.com/in/ashar-abdul-aziz-18130135" target="_blank"/>
                <SocialIcon style={{ height: 45, width: 45, }} fgColor="#ffffff" bgColor="rgb(36,36,36)" network="facebook" url="https://facebook.com/azharbinabdulaziz" target="_blank"/>
                <SocialIcon style={{ height: 45, width: 45, }} fgColor="#ffffff" bgColor="rgb(36,36,36)" network="instagram" url="https://instagram.com/azhar_bin_abdul_aziz" target="_blank"/>
            </div>
    </footer>
  )
}

export default Footer