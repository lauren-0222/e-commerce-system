export class CustomAppError extends Error {
        statusCode: number;
        constructor(message: string, statusCode: number=500) {
            super(message);
            this.name = 'CustomAppError'; 
            this.statusCode = statusCode; 
        }
    
    }

    export function handleError (error:unknown): void{
        if (error instanceof CustomAppError){
            console.error(error.message, error.statusCode)
        }
        else if (error instanceof Error){
            console.error(error.name, error.message)
        } else {
            console.error(error)
        }
        
    }