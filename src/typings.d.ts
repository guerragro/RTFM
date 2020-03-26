type MessageType = 'warn | indo | success';
type MessageHandler = (message: string|Error, type?: MessageType) => void;
