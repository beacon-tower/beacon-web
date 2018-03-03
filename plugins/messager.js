export function showMessager(text, type = 'success', duration = 1200) {
  this.$notify({
        group: 'notice',
        type,
        duration,
        text,
        title: type === 'success' ? 'Success!' :  type === 'error'  ? 'Error!'　: 'Warn!'
  });
}
