import React from 'react'

const ArmComp = ({ size, className }) => {
    return (
        <div className='flex items-center'>
            <div className="rounded-full bg-foreground text-background">
                <svg fill="none" height={size} viewBox="0 0 32 32" width={size}>
                    <path
                        clipRule="evenodd"
                        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                        fill="currentColor"
                        fillRule="evenodd"
                    />
                </svg>
            </div>
            <span className={`mr-2 text-small font-medium ${className}`}>تن تک</span>
        </div>
    )
}

export default ArmComp
