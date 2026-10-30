import { useParams } from 'react-router'
const Welcome = () => {
    const { cname } = useParams()
    return (
        <div>
            <h1>Welcome to my app, {cname}!</h1>
        </div>
    );
}

export default Welcome