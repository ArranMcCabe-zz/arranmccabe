export default function(){
  this.transition(
    this.fromRoute('about'),
    this.toRoute('experience'),
    this.use('fade', { duration: 500 }),
    this.reverse('fade', { duration: 500 })
  );
  this.transition(
    this.fromRoute('experience'),
    this.toRoute('contact'),
    this.use('fade', { duration: 500 }),
    this.reverse('fade', { duration: 500 })
  );
  this.transition(
    this.fromRoute('contact'),
    this.toRoute('about'),
    this.use('fade', { duration: 500 }),
    this.reverse('fade', { duration: 500 })
  );
}
