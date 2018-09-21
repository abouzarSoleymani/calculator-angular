import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';
import { CalculatorService } from '../services';
import { By } from '../../../../node_modules/@angular/platform-browser';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ],
      providers: [ CalculatorService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve garantir que 3 + 2 = 5', () => {
    let btn3 = fixture.debugElement.query(By.css("#btn3"));
    let btnSoma = fixture.debugElement.query(By.css("#btnSoma"));
    let btn2 = fixture.debugElement.query(By.css("#btn2"));
    let btnCalcular = fixture.debugElement.query(By.css("#btnCalcular"));
    let display = fixture.debugElement.query(By.css("#display"));

    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnSoma.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn2.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalcular.triggerEventHandler('click', null);
    fixture.detectChanges();

    display.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('5');
  });

  it('deve garantir que 3 - 4 = -1', () => {
    let btn3 = fixture.debugElement.query(By.css("#btn3"));
    let btnSubtracao = fixture.debugElement.query(By.css("#btnSubtracao"));
    let btn4 = fixture.debugElement.query(By.css("#btn4"));
    let btnCalcular = fixture.debugElement.query(By.css("#btnCalcular"));
    let display = fixture.debugElement.query(By.css("#display"));

    btn3.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnSubtracao.triggerEventHandler('click', null);
    fixture.detectChanges();

    btn4.triggerEventHandler('click', null);
    fixture.detectChanges();

    btnCalcular.triggerEventHandler('click', null);
    fixture.detectChanges();

    display.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('-1');
  });

});
