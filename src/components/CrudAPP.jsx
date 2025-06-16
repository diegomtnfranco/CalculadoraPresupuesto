import TablaRegistro from "../components/TablaRegistro";

const CrudAPP = () => {

    const initialData = [
        {
            'id': 1,
            'name': 'Felipe',
            'username': 'felip3x'
        },
        {
            'id': 2,
            'name': 'Chilindrinus',
            'username': 'tchildrix'
        },
        {
            'id': 3,
            'name': 'Morita',
            'username': 'moraitax'
        }
    ]

    return (
        <div>
            <h2>CRUDAPP</h2>
            <TablaRegistro />
        </div>
    )
}

export default CrudAPP;