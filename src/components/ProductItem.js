import './ProductItem.css';
import ProductDate from  './ProductDate';
import Card from './Card';


const ProductItem = (props) =>{

        const [title, setTitle]=useState(props.title);
    

    function clickHandler(){
        setTitle("Popcorn");
        console.log("button clicked");
    }

    return (
        <card className='product-item'>
        <ProductDate date={props.date}/>
        <div className='product-item__description'>
            <h2>{props.title}</h2>
        </div>

        <button onClick={clickHandler}>Add Me</button>

        </card>
    );
}


export default ProductItem; 