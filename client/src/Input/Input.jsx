import './Input.css';

export default function Input({
    type,
    id,
    labelName,
    value,
    required,
    minValue = 1,
    onChange,
    disabled = false,
    step = 1,
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
                disabled={disabled}
                {...(type === 'number' && { min: parseInt(minValue) })}
                {...(type === 'number' && step !== 1 && { step: step })}
                onChange={onChange}
            />
        </div>
    );
}
