import { Component } from 'react';

export class DefaultErrorBoundary extends Component {
    state = {
        error: null,
    };

    static getDerivedStateFromError(error: Error) {
        // Update state so next render shows fallback UI.
        return { error: 'Something went wrong =/' };
    }

    render() {
        if (this.state.error) {
            // You can render any custom fallback UI
            return <p>{this.state.error}</p>;
        }

        return this.props.children;
    }
}
