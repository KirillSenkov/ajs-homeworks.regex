export default function formatPhone(num) {
    return '+' + num.replace(/^8/, '7').replace(/\D/g, '');
}
