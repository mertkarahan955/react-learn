
// external: disaridan geliyor direkt

// modules: yeni bir kisim acip buraya import edip className'de styles.import 

// inline: su anki ornek inline
function Button(){
const styles = {
    backgroundColor: 'white',
}

    return(
        <button style={styles}>
            Click Me
        </button>
    );
}

export default Button