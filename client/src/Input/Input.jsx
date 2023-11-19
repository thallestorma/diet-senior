import './Input.css';

export default function Input({
    type,
    id,
    labelName,
    value,
    required,
    minValue = 1,
    onChange,
}) {
    return (
        <div className='input-line'>
            <label htmlFor={id}>{labelName}</label>
            <input
                type={type}
                name={id}
                id={id}
                value={value}
                required={required}
                {...(type === 'number' && { minLength: parseInt(minValue) })}
                onChange={onChange}
            />
        </div>
    );
}
