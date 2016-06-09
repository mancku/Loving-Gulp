class Utils {
    routeChangeSuccess(status: string): any {
        return (status === 'active') ?
            { completed: false } : (status === 'completed') ? { completed: true } : {};
    }
}