import PropTypes from 'prop-types'

import useSelect from '../hooks/useSelect';
import styles from './Formulario.module.css';

const Formulario = ({setCategoria}) => {

    const OPCIONES = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertaiment', label: 'Entretenimiento'},
        {value: 'health', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sports', label: 'Deportes'},
        {value: 'technology', label: 'Tecnologia'}
    ]

    const [categorias, SelectNoticias] = useSelect('general', OPCIONES);

    const buscarNoticia = e => {
        e.preventDefault();

        setCategoria(categorias);
    }

    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                onSubmit={buscarNoticia}
                >
                    <h2 className={styles.heading}>Encuentra Noticias por Categoria</h2>

                    <SelectNoticias />

                    <div className="input-field col s12">
                        <input 
                        type="submit"
                        className={`${styles.btn_block} btn-large amber darken-2`}
                        value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}

Formulario.propTypes = {
    setCategoria: PropTypes.func.isRequired
}
 
export default Formulario;