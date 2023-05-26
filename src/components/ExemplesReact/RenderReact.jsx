export default function RenderReact(props) {
    return(
      <div>
        <h2>Olá me chamo {props.name}</h2>
        <h3>Sou {props.office} e tenho {props.age}</h3>
      </div>
    )
}