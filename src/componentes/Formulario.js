export function Formulario(props){
    return(
        <form>
            <input
            type="Text"
            placeholder="Introduce la nueva Tarea"/>

            <input 
            type="submit"
            className="btn"
            value="AGREGAR" />
        </form>
    );
}