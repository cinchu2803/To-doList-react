export function Formulario(props){

const {tarea, handleSubmit, handleChange} = props

    return(
        <form onSubmit={handleSubmit}>
            <input
            type="Text"
            placeholder="Introduce la nueva Tarea"
            onChange={handleChange} 
            value ={tarea} />

            <input 
            type="submit"
            className="btn"
            value="AGREGAR" 
            onClick={handleSubmit} />
        </form>
    );
}