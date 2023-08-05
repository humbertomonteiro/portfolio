import './background.css'

export default function Background() {
    return (
        <div className="bg-img">
            <img src={require('../../assets/imgs/bg/bg.jpg')} alt="" />
        </div>
    )
}