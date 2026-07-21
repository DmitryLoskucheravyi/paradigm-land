import { Component } from "react";
import "./ErrorBoundary.css";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo);
    }

    handleReload = () => {
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-boundary">
                    <h2 className="h2">Щось пішло не так</h2>
                    <p className="p-small-secondary">
                        Сталася непередбачена помилка. Спробуйте оновити сторінку.
                    </p>
                    <button className="error-boundary-btn" onClick={this.handleReload}>
                        Оновити сторінку
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
