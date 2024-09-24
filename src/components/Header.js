import '../style/Header.css'
export default function Header(props){
    let {title} = props;
    title = 'me me me' //this should never ever be done

    const h1Style = {color: "red", backgroundColor: 'black'}
    return(
        <h1  className="head1" style={h1Style}>
            {title}
        </h1>
    )
}
/* 
{} curly braces denotes -> usage of JS

color: red -> inline
background-color: 

    dashed syntax won't work -> camelcasing
*/