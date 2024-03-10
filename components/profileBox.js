import Image from "next/image";
import profilePic from '../public/avatar.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faQq, faBilibili } from "@fortawesome/free-brands-svg-icons";

const ProfileBox = () => {
  return(
    <>
      <Image src={ profilePic } alt="avatar"
             width={ 150 } height={ 150 } className="rounded-full ring-4 ring-slate-300"/>
      <div>
        <h1 className="text-3xl font-semibold max-sm:text-xl">Yiming Wang</h1>
        <p className="text-l font-medium max-sm:hidden">Undergraduate Student</p>
        <a href="https://www.njupt.edu.cn/" target="_blank" rel="noopener">
          <p className="text-l font-medium text-center text-pretty">Nanjing University of Posts and
            Telecommunications</p>
        </a>
        <address>
          <a href="mailto:name@email.com" className="font-sans max-sm:hidden">wang1m@outlook.com</a>
        </address>
      </div>


      <div className="iconItems max-sm:">
        <div><a href="https://github.com/Dilettante258">
          <FontAwesomeIcon className="w-6 h-6" icon={ faFile }></FontAwesomeIcon>
        </a></div>
        <div><a href="https://github.com/Dilettante258">
          <FontAwesomeIcon className="w-6 h-6" icon={ faGithub }></FontAwesomeIcon>
        </a></div>
        <div><a href="tencent://AddContact/?fromId=45&amp;fromSubId=1&amp;subcmd=all&amp;uin=2226519330&amp;website=www.oicqzone.com">
          <FontAwesomeIcon className="w-6 h-6" icon={ faQq }></FontAwesomeIcon>
        </a></div>
        <div><a href="https://space.bilibili.com/103940105">
          <FontAwesomeIcon className="w-6 h-6" icon={ faBilibili }></FontAwesomeIcon>
        </a></div>
      </div>
    </>
  )
}

export default ProfileBox;