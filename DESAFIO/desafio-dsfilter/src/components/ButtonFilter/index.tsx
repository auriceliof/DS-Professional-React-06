import './styles.css';

type Props = {
    name: string;
}
export default function({name} : Props){
    return(
        <button 
            type="submit"
            className="dsf-button">
                {name}
        </button>
    );
}
