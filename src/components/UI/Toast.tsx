import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from { transform: translateY(-100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const ToastContainer = styled.div<{ type: 'success' | 'error' | 'info' }>`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 1rem 2rem;
  background: ${props => {
    switch (props.type) {
      case 'success': return '#4CAF50';
      case 'error': return '#f44336';
      default: return '#2196F3';
    }
  }};
  color: white;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  animation: ${slideIn} 0.3s ease-out;
  z-index: 1000;
`;

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
}

const Toast = ({ message, type }: ToastProps) => (
  <ToastContainer type={type}>
    {message}
  </ToastContainer>
);

export default Toast;
