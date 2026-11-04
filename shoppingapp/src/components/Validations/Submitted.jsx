export default function Submitted({data}) {
    return (
        <div className="alert-alert-success card-wide">
            <strong>Form Submitted Successfully!</strong>
            <pre>
                {JSON.stringify(data, null, 2)}
          </pre>
        </div>
    );
}