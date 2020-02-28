const { __ } = wp.i18n;

export function getIcon( status ) {
	switch ( status ) {
		case 'completed':
			return <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g opacity="0.5">
					<path opacity="0.3" d="M17 5.5C15.46 5.5 13.96 6.49 13.44 7.86H11.57C11.04 6.49 9.54 5.5 8 5.5C6 5.5 4.5 7 4.5 9C4.5 11.89 7.64 14.74 12.4 19.05L12.5 19.15L12.6 19.05C17.36 14.74 20.5 11.89 20.5 9C20.5 7 19 5.5 17 5.5Z" fill="black" />
					<path fillRule="evenodd" clipRule="evenodd" d="M12.5 5.59C13.59 4.31 15.26 3.5 17 3.5C20.08 3.5 22.5 5.92 22.5 9C22.5 12.7769 19.1056 15.8549 13.9627 20.5185L13.95 20.53L12.5 21.85L11.05 20.54L11.0105 20.5041C5.88263 15.8442 2.5 12.7703 2.5 9C2.5 5.92 4.92 3.5 8 3.5C9.74 3.5 11.41 4.31 12.5 5.59ZM12.5 19.15L12.6 19.05C17.36 14.74 20.5 11.89 20.5 9C20.5 7 19 5.5 17 5.5C15.46 5.5 13.96 6.49 13.44 7.86H11.57C11.04 6.49 9.54 5.5 8 5.5C6 5.5 4.5 7 4.5 9C4.5 11.89 7.64 14.74 12.4 19.05L12.5 19.15Z" fill="black" />
				</g>
			</svg>;
		case 'renewal':
			return <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g opacity="0.5">
					<path opacity="0.3" d="M17 5.5C15.46 5.5 13.96 6.49 13.44 7.86H11.57C11.04 6.49 9.54 5.5 8 5.5C6 5.5 4.5 7 4.5 9C4.5 11.89 7.64 14.74 12.4 19.05L12.5 19.15L12.6 19.05C17.36 14.74 20.5 11.89 20.5 9C20.5 7 19 5.5 17 5.5Z" fill="black" />
					<path fillRule="evenodd" clipRule="evenodd" d="M12.5 5.59C13.59 4.31 15.26 3.5 17 3.5C20.08 3.5 22.5 5.92 22.5 9C22.5 12.7769 19.1056 15.8549 13.9627 20.5185L13.95 20.53L12.5 21.85L11.05 20.54L11.0105 20.5041C5.88263 15.8442 2.5 12.7703 2.5 9C2.5 5.92 4.92 3.5 8 3.5C9.74 3.5 11.41 4.31 12.5 5.59ZM12.5 19.15L12.6 19.05C17.36 14.74 20.5 11.89 20.5 9C20.5 7 19 5.5 17 5.5C15.46 5.5 13.96 6.49 13.44 7.86H11.57C11.04 6.49 9.54 5.5 8 5.5C6 5.5 4.5 7 4.5 9C4.5 11.89 7.64 14.74 12.4 19.05L12.5 19.15Z" fill="black" />
				</g>
			</svg>;
		case 'first_renewal':
			return <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g opacity="0.5">
					<path opacity="0.3" d="M17 5.5C15.46 5.5 13.96 6.49 13.44 7.86H11.57C11.04 6.49 9.54 5.5 8 5.5C6 5.5 4.5 7 4.5 9C4.5 11.89 7.64 14.74 12.4 19.05L12.5 19.15L12.6 19.05C17.36 14.74 20.5 11.89 20.5 9C20.5 7 19 5.5 17 5.5Z" fill="black" />
					<path fillRule="evenodd" clipRule="evenodd" d="M12.5 5.59C13.59 4.31 15.26 3.5 17 3.5C20.08 3.5 22.5 5.92 22.5 9C22.5 12.7769 19.1056 15.8549 13.9627 20.5185L13.95 20.53L12.5 21.85L11.05 20.54L11.0105 20.5041C5.88263 15.8442 2.5 12.7703 2.5 9C2.5 5.92 4.92 3.5 8 3.5C9.74 3.5 11.41 4.31 12.5 5.59ZM12.5 19.15L12.6 19.05C17.36 14.74 20.5 11.89 20.5 9C20.5 7 19 5.5 17 5.5C15.46 5.5 13.96 6.49 13.44 7.86H11.57C11.04 6.49 9.54 5.5 8 5.5C6 5.5 4.5 7 4.5 9C4.5 11.89 7.64 14.74 12.4 19.05L12.5 19.15Z" fill="black" />
				</g>
			</svg>;
		case 'abandoned':
			return <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g opacity="0.5">
					<path fillRule="evenodd" clipRule="evenodd" d="M12.5 5.59C13.59 4.31 15.26 3.5 17 3.5C20.08 3.5 22.5 5.92 22.5 9C22.5 12.7769 19.1056 15.8549 13.9627 20.5185L13.95 20.53L12.5 21.85L11.05 20.54L11.0105 20.5041C5.88263 15.8442 2.5 12.7703 2.5 9C2.5 5.92 4.92 3.5 8 3.5C9.74 3.5 11.41 4.31 12.5 5.59ZM12.5 19.15L12.6 19.05C17.36 14.74 20.5 11.89 20.5 9C20.5 7 19 5.5 17 5.5C15.46 5.5 13.96 6.49 13.44 7.86H11.57C11.04 6.49 9.54 5.5 8 5.5C6 5.5 4.5 7 4.5 9C4.5 11.89 7.64 14.74 12.4 19.05L12.5 19.15Z" fill="black" />
				</g>
			</svg>;
		case 'cancelled':
			return <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g opacity="0.5">
					<path fillRule="evenodd" clipRule="evenodd" d="M12.5 5.59C13.59 4.31 15.26 3.5 17 3.5C20.08 3.5 22.5 5.92 22.5 9C22.5 12.7769 19.1056 15.8549 13.9627 20.5185L13.95 20.53L12.5 21.85L11.05 20.54L11.0105 20.5041C5.88263 15.8442 2.5 12.7703 2.5 9C2.5 5.92 4.92 3.5 8 3.5C9.74 3.5 11.41 4.31 12.5 5.59ZM12.5 19.15L12.6 19.05C17.36 14.74 20.5 11.89 20.5 9C20.5 7 19 5.5 17 5.5C15.46 5.5 13.96 6.49 13.44 7.86H11.57C11.04 6.49 9.54 5.5 8 5.5C6 5.5 4.5 7 4.5 9C4.5 11.89 7.64 14.74 12.4 19.05L12.5 19.15Z" fill="black" />
				</g>
			</svg>;
		case 'refunded':
			return <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g opacity="0.5">
					<path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M19.5 19.5902H5.5V5.41016H19.5V19.5902ZM18.5 7.50016H6.5V9.50016H18.5V7.50016ZM6.5 11.5002H18.5V13.5002H6.5V11.5002ZM18.5 15.5002H6.5V17.5002H18.5V15.5002Z" fill="black" />
					<path fillRule="evenodd" clipRule="evenodd" d="M20 4L18.5 2.5L17 4L15.5 2.5L14 4L12.5 2.5L11 4L9.5 2.5L8 4L6.5 2.5L5 4L3.5 2.5V22.5L5 21L6.5 22.5L8 21L9.5 22.5L11 21L12.5 22.5L14 21L15.5 22.5L17 21L18.5 22.5L20 21L21.5 22.5V2.5L20 4ZM5.5 19.59V5.41H19.5V19.59H5.5ZM18.5 17.5V15.5H6.5V17.5H18.5ZM18.5 11.5V13.5H6.5V11.5H18.5ZM18.5 9.5V7.5H6.5V9.5H18.5Z" fill="black" />
				</g>
			</svg>;
		default:
			return <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g opacity="0.5">
					<path fillRule="evenodd" clipRule="evenodd" d="M12.5 5.59C13.59 4.31 15.26 3.5 17 3.5C20.08 3.5 22.5 5.92 22.5 9C22.5 12.7769 19.1056 15.8549 13.9627 20.5185L13.95 20.53L12.5 21.85L11.05 20.54L11.0105 20.5041C5.88263 15.8442 2.5 12.7703 2.5 9C2.5 5.92 4.92 3.5 8 3.5C9.74 3.5 11.41 4.31 12.5 5.59ZM12.5 19.15L12.6 19.05C17.36 14.74 20.5 11.89 20.5 9C20.5 7 19 5.5 17 5.5C15.46 5.5 13.96 6.49 13.44 7.86H11.57C11.04 6.49 9.54 5.5 8 5.5C6 5.5 4.5 7 4.5 9C4.5 11.89 7.64 14.74 12.4 19.05L12.5 19.15Z" fill="black" />
				</g>
			</svg>;
	}
}

export function getColor( status ) {
	switch ( status ) {
		case 'first_renewal':
		case 'renewal':
		case 'completed':
			return '#69B868';
		case 'abandoned':
			return '#D75A4B';
		case 'cancelled':
			return '#D75A4B';
		case 'refunded':
			return '#D75A4B';
		default:
			return '#D75A4B';
	}
}

export function getLabel( status ) {
	switch ( status ) {
		case 'completed':
			return __( 'Completed', 'give' );
		case 'renewal':
			return __( 'Renewal', 'give' );
		case 'first_renewal':
			return __( 'First-Time Renewal', 'give' );
		case 'abandoned':
			return __( 'Abandoned', 'give' );
		case 'cancelled':
			return __( 'Cancelled', 'give' );
		case 'refunded':
			return __( 'Refunded', 'give' );
		default:
			return status;
	}
}
