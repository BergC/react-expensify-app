import moment from 'moment';

// Get visible expenses.
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);

        // Checks if start date is the same or before the created date to determine if expense should be showed.
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true ;

        // Checks if end date is the same or later than the created date to determine if expense should be showed.
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;

        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};