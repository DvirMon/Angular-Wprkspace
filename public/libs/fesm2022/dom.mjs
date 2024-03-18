import * as i1$3 from '@angular/common';
import { CommonModule, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import * as i0 from '@angular/core';
import { input, EventEmitter, Component, Output, Directive, HostListener, effect, ChangeDetectionStrategy, ContentChild, Input, signal, inject, Injector, computed, runInInjectionContext, Injectable } from '@angular/core';
import * as i1 from '@angular/forms';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i2$1 from '@angular/material/form-field';
import { MatFormFieldModule, MatFormField, MatLabel } from '@angular/material/form-field';
import * as i2 from '@angular/material/input';
import { MatInputModule, MatInput } from '@angular/material/input';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, debounceTime, distinctUntilChanged, tap, Subject, map, startWith, switchMap, EMPTY } from 'rxjs';
import { MatAutocompleteTrigger, MatAutocomplete } from '@angular/material/autocomplete';
import { MatOption } from '@angular/material/core';
import { toSignal } from '@angular/core/rxjs-interop';
import * as i2$2 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardContent } from '@angular/material/card';
import * as i1$1 from '@angular/router';
import { RouterModule } from '@angular/router';
import * as i1$2 from '@angular/material/divider';
import { MatDividerModule } from '@angular/material/divider';
import { trigger, state, style, transition, animate } from '@angular/animations';
import * as i1$4 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import { tapResponse } from '@ngrx/operators';
import { patchState } from '@ngrx/signals';
import { setAllEntities, addEntities } from '@ngrx/signals/entities';

class SearchInputComponent {
    constructor() {
        this.initialValue = input();
        this.searchResultsData = input();
        this.searchControl = new FormControl();
        this.termChanged = new EventEmitter();
        this.onTermChanged = rxMethod(pipe(debounceTime(300), distinctUntilChanged(), tap((value) => this.termChanged.emit(value))));
        this.onTermChanged(this.searchControl.valueChanges);
    }
    ngOnInit() {
        // Set initial value if provided
        const value = this.initialValue();
        if (value != undefined) {
            this.searchControl.setValue(value);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: SearchInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "17.2.2", type: SearchInputComponent, isStandalone: true, selector: "dom-search-input", inputs: { initialValue: { classPropertyName: "initialValue", publicName: "initialValue", isSignal: true, isRequired: false, transformFunction: null }, searchResultsData: { classPropertyName: "searchResultsData", publicName: "searchResultsData", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { termChanged: "termChanged" }, ngImport: i0, template: "<mat-form-field>\n  <input matInput type=\"text\" [formControl]=\"searchControl\" />\n  <!-- @if (searchResultsData()!.totalResults !== 0) {\n    <span matSuffix\n      >{{ searchResultsData()!.totalResults }} results\n    </span>\n  } -->\n</mat-form-field>\n", styles: ["mat-form-field{width:100%;font-size:24px}mat-form-field span[matSuffix]{padding:8px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i2$1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "ngmodule", type: MatFormFieldModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: SearchInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dom-search-input', standalone: true, imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatInputModule,
                        MatFormFieldModule,
                    ], template: "<mat-form-field>\n  <input matInput type=\"text\" [formControl]=\"searchControl\" />\n  <!-- @if (searchResultsData()!.totalResults !== 0) {\n    <span matSuffix\n      >{{ searchResultsData()!.totalResults }} results\n    </span>\n  } -->\n</mat-form-field>\n", styles: ["mat-form-field{width:100%;font-size:24px}mat-form-field span[matSuffix]{padding:8px}\n"] }]
        }], ctorParameters: () => [], propDecorators: { termChanged: [{
                type: Output
            }] } });

class OptionContentDirective {
    constructor(template) {
        this.template = template;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: OptionContentDirective, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.2.2", type: OptionContentDirective, isStandalone: true, selector: "[domOptionContent]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: OptionContentDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[domOptionContent]',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i0.TemplateRef }] });

class ParallaxDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    onScroll(event) {
        const scrollPosition = event.target.scrollTop;
        this.renderer.setStyle(this.el.nativeElement, 'backgroundPositionY', `${scrollPosition * 0.5}px`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: ParallaxDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.2.2", type: ParallaxDirective, isStandalone: true, selector: "[domParallax]", host: { listeners: { "scroll": "onScroll($event)" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: ParallaxDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[domParallax]',
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }], propDecorators: { onScroll: [{
                type: HostListener,
                args: ["scroll", ["$event"]]
            }] } });

class AutocompleteComponent {
    constructor() {
        this.label = input('Search...');
        this.defaultValue = input();
        this.options = input.required();
        this.control = input.required();
        this.optionTemplate = input();
        this.displayFn = () => '';
        this.queryChanged = new EventEmitter();
        this.optionSelected = new EventEmitter();
        this.valueChanged = new Subject();
        this.onQueryChange = rxMethod(pipe(debounceTime(300), distinctUntilChanged(), map((value) => (!value ? this.defaultValue() : value)), tap((value) => this.queryChanged.emit(value))));
        effect(() => {
            if (this.control()) {
                this.onQueryChange(this.valueChanged.asObservable());
            }
        }, { allowSignalWrites: true });
    }
    onOptionSelected(event) {
        const option = event.option.value;
        this.optionSelected.emit(option);
    }
    onQueryChanged() {
        this.valueChanged.next(this.control().value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: AutocompleteComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "17.2.2", type: AutocompleteComponent, isStandalone: true, selector: "dom-autocomplete", inputs: { label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null }, defaultValue: { classPropertyName: "defaultValue", publicName: "defaultValue", isSignal: true, isRequired: false, transformFunction: null }, options: { classPropertyName: "options", publicName: "options", isSignal: true, isRequired: true, transformFunction: null }, control: { classPropertyName: "control", publicName: "control", isSignal: true, isRequired: true, transformFunction: null }, optionTemplate: { classPropertyName: "optionTemplate", publicName: "optionTemplate", isSignal: true, isRequired: false, transformFunction: null }, displayFn: { classPropertyName: "displayFn", publicName: "displayFn", isSignal: false, isRequired: false, transformFunction: null } }, outputs: { queryChanged: "queryChanged", optionSelected: "optionSelected" }, queries: [{ propertyName: "optionContentDirective", first: true, predicate: OptionContentDirective, descendants: true }], ngImport: i0, template: "<mat-form-field appearance=\"outline\">\n  <mat-label>{{ label() }}</mat-label>\n  <input\n    #input\n    type=\"text\"\n    matInput\n    autocomplete=\"off\"\n    [formControl]=\"control()\"\n    [matAutocomplete]=\"auto\"\n    (input)=\"onQueryChanged()\"\n  />\n  <mat-autocomplete\n    (optionSelected)=\"onOptionSelected($event)\"\n    autoActiveFirstOption\n    [displayWith]=\"displayFn\"\n    #auto=\"matAutocomplete\"\n  >\n    <ng-container *ngFor=\"let option of options()\">\n      <mat-option [value]=\"option\">\n        <ng-container *ngIf=\"optionContentDirective; else defaultTemplate\">\n          <ng-container\n            *ngTemplateOutlet=\"\n              optionContentDirective.template;\n              context: { $implicit: option }\n            \"\n          ></ng-container>\n        </ng-container>\n\n        <ng-template #defaultTemplate>\n          {{ option }}\n        </ng-template>\n      </mat-option>\n    </ng-container>\n  </mat-autocomplete>\n</mat-form-field>\n", styles: ["mat-form-field{width:100%}\n"], dependencies: [{ kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: MatLabel, selector: "mat-label" }, { kind: "directive", type: MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "directive", type: MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", inputs: ["matAutocomplete", "matAutocompletePosition", "matAutocompleteConnectedTo", "autocomplete", "matAutocompleteDisabled"], exportAs: ["matAutocompleteTrigger"] }, { kind: "component", type: MatAutocomplete, selector: "mat-autocomplete", inputs: ["aria-label", "aria-labelledby", "displayWith", "autoActiveFirstOption", "autoSelectActiveOption", "requireSelection", "panelWidth", "disableRipple", "class", "hideSingleSelectionIndicator"], outputs: ["optionSelected", "opened", "closed", "optionActivated"], exportAs: ["matAutocomplete"] }, { kind: "component", type: MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: AutocompleteComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dom-autocomplete', standalone: true, imports: [
                        NgFor,
                        NgIf,
                        ReactiveFormsModule,
                        NgTemplateOutlet,
                        MatFormField,
                        MatLabel,
                        MatInput,
                        MatAutocompleteTrigger,
                        MatAutocomplete,
                        MatOption,
                        OptionContentDirective,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-form-field appearance=\"outline\">\n  <mat-label>{{ label() }}</mat-label>\n  <input\n    #input\n    type=\"text\"\n    matInput\n    autocomplete=\"off\"\n    [formControl]=\"control()\"\n    [matAutocomplete]=\"auto\"\n    (input)=\"onQueryChanged()\"\n  />\n  <mat-autocomplete\n    (optionSelected)=\"onOptionSelected($event)\"\n    autoActiveFirstOption\n    [displayWith]=\"displayFn\"\n    #auto=\"matAutocomplete\"\n  >\n    <ng-container *ngFor=\"let option of options()\">\n      <mat-option [value]=\"option\">\n        <ng-container *ngIf=\"optionContentDirective; else defaultTemplate\">\n          <ng-container\n            *ngTemplateOutlet=\"\n              optionContentDirective.template;\n              context: { $implicit: option }\n            \"\n          ></ng-container>\n        </ng-container>\n\n        <ng-template #defaultTemplate>\n          {{ option }}\n        </ng-template>\n      </mat-option>\n    </ng-container>\n  </mat-autocomplete>\n</mat-form-field>\n", styles: ["mat-form-field{width:100%}\n"] }]
        }], ctorParameters: () => [], propDecorators: { optionContentDirective: [{
                type: ContentChild,
                args: [OptionContentDirective]
            }], displayFn: [{
                type: Input
            }], queryChanged: [{
                type: Output
            }], optionSelected: [{
                type: Output
            }] } });

function getFormKeys(obj) {
    return signal(Object.keys(obj.controls));
}
var FormErrorType;
(function (FormErrorType) {
    FormErrorType["Required"] = "required";
    FormErrorType["Pattern"] = "pattern";
    FormErrorType["EmailPattern"] = "email";
    FormErrorType["Server"] = "serverError";
})(FormErrorType || (FormErrorType = {}));
const errorMessageMap = {
    required: 'required',
    pattern: 'invalid pattern',
    email: 'invalid email format',
};
function setFormError(group, error) {
    if (group !== null && error !== null) {
        const control = group.get(error.control);
        if (control != null) {
            control.setErrors({ serverError: error.message });
        }
    }
}
function handleServerErrorEffect(injector, serverError, form) {
    effect(() => {
        const error = serverError();
        if (error) {
            setFormError(form, error);
        }
    }, { allowSignalWrites: true, injector });
}

class FormInputComponent {
    constructor() {
        this._injector = inject(Injector);
        this.control = input.required();
        this.key = input.required();
        this.type = input();
        this.label = input();
        this.hint = input();
        this.errorsMap = input();
    }
    ngOnInit() {
        this.formControl = computed(() => this.control());
        this.hasError = this._setHasErrorSignal(this.formControl());
        this.errorMessage = this._setErrorMessageSignal(this.formControl());
    }
    _setErrorMessageSignal(formControl) {
        return runInInjectionContext(this._injector, () => toSignal(this._setErrorObservable(formControl), {
            initialValue: this._getErrorMessage(formControl),
        }));
    }
    _setErrorObservable(formControl) {
        return formControl.statusChanges.pipe(map(() => this._getErrorMessage(formControl)));
    }
    _setHasErrorSignal(formControl) {
        return runInInjectionContext(this._injector, () => toSignal(this._setHasErrorObservable(formControl), {
            initialValue: false,
        }));
    }
    _setHasErrorObservable(formControl) {
        return formControl.statusChanges.pipe(startWith(formControl.status), map(() => formControl.errors), map((errors) => !!errors));
    }
    // handle input error messages
    _getErrorMessage(control) {
        const errors = { ...control.errors };
        if (errors) {
            const errorKeys = Object.keys(errors);
            for (const error of errorKeys) {
                if (control.hasError(error)) {
                    const errorMap = {
                        ...errors,
                        ...errorMessageMap,
                        ...this.errorsMap(),
                    };
                    return errorMap[error];
                }
            }
        }
        return "";
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: FormInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.2.2", type: FormInputComponent, isStandalone: true, selector: "dom-form-input", inputs: { control: { classPropertyName: "control", publicName: "control", isSignal: true, isRequired: true, transformFunction: null }, key: { classPropertyName: "key", publicName: "key", isSignal: true, isRequired: true, transformFunction: null }, type: { classPropertyName: "type", publicName: "type", isSignal: true, isRequired: false, transformFunction: null }, label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null }, hint: { classPropertyName: "hint", publicName: "hint", isSignal: true, isRequired: false, transformFunction: null }, errorsMap: { classPropertyName: "errorsMap", publicName: "errorsMap", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: "<mat-form-field class=\"full-width\">\n  <mat-label>{{ label() }}</mat-label>\n  <input\n    #input\n    matInput\n    [type]=\"type() || 'text'\"\n    [formControl]=\"formControl()\"\n    autocomplete=\"off\"\n    [name]=\"key()\"\n  />\n\n  @if (hint()) {\n\n  <!-- <mat-hint> {{ \"Please enter your \" + hint() }}</mat-hint> -->\n  <mat-hint> {{ formControl().errors }}</mat-hint>\n  } @if (hasError()) {\n  <mat-error>{{ errorMessage() }}</mat-error>\n  }\n</mat-form-field>\n", styles: ["mat-form-field{width:100%;display:inline-block}input[type=number]::-webkit-inner-spin-button{-webkit-appearance:none}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2$1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2$1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i2$1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i2$1.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: FormInputComponent, decorators: [{
            type: Component,
            args: [{ selector: "dom-form-input", standalone: true, imports: [
                        CommonModule,
                        ReactiveFormsModule,
                        MatFormFieldModule,
                        MatInputModule,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-form-field class=\"full-width\">\n  <mat-label>{{ label() }}</mat-label>\n  <input\n    #input\n    matInput\n    [type]=\"type() || 'text'\"\n    [formControl]=\"formControl()\"\n    autocomplete=\"off\"\n    [name]=\"key()\"\n  />\n\n  @if (hint()) {\n\n  <!-- <mat-hint> {{ \"Please enter your \" + hint() }}</mat-hint> -->\n  <mat-hint> {{ formControl().errors }}</mat-hint>\n  } @if (hasError()) {\n  <mat-error>{{ errorMessage() }}</mat-error>\n  }\n</mat-form-field>\n", styles: ["mat-form-field{width:100%;display:inline-block}input[type=number]::-webkit-inner-spin-button{-webkit-appearance:none}\n"] }]
        }] });

class CardButtonComponent {
    constructor() {
        this.label = input();
        this.boldLabel = input();
        this.routerLink = input();
        this.clicked = new EventEmitter();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: CardButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "17.2.2", type: CardButtonComponent, isStandalone: true, selector: "dom-card-button", inputs: { label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null }, boldLabel: { classPropertyName: "boldLabel", publicName: "boldLabel", isSignal: true, isRequired: false, transformFunction: null }, routerLink: { classPropertyName: "routerLink", publicName: "routerLink", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { clicked: "clicked" }, ngImport: i0, template: `<mat-card>
    <mat-card-content>
      <section>
        <button
          mat-raised-button
          [disableRipple]="true"
          color="accent"
          [routerLink]="routerLink()">
          {{ label() }} <b>{{ boldLabel() }}</b>
        </button>
      </section>
    </mat-card-content>
  </mat-card> `, isInline: true, styles: ["mat-card{height:100%;justify-content:center}mat-card mat-card-content{padding:32px}mat-card mat-card-content button{width:100%}\n"], dependencies: [{ kind: "ngmodule", type: RouterModule }, { kind: "directive", type: i1$1.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2$2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "component", type: MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "directive", type: MatCardContent, selector: "mat-card-content" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: CardButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: "dom-card-button", standalone: true, imports: [RouterModule, MatButtonModule, MatCard, MatCardContent], template: `<mat-card>
    <mat-card-content>
      <section>
        <button
          mat-raised-button
          [disableRipple]="true"
          color="accent"
          [routerLink]="routerLink()">
          {{ label() }} <b>{{ boldLabel() }}</b>
        </button>
      </section>
    </mat-card-content>
  </mat-card> `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["mat-card{height:100%;justify-content:center}mat-card mat-card-content{padding:32px}mat-card mat-card-content button{width:100%}\n"] }]
        }], propDecorators: { clicked: [{
                type: Output
            }] } });

class DividerHeaderComponent {
    constructor() {
        this.label = "Hallow";
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: DividerHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.2", type: DividerHeaderComponent, isStandalone: true, selector: "dom-divider-header", inputs: { label: "label" }, ngImport: i0, template: `
    <section class="divider">
    <mat-divider></mat-divider>
    <span> {{ label }} </span>
    <mat-divider></mat-divider>
  </section>
  `, isInline: true, styles: ["section.divider{display:flex;justify-content:center;align-items:center}section.divider mat-divider{width:100%}section.divider span{margin:8px;flex-shrink:0;text-align:center}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: MatDividerModule }, { kind: "component", type: i1$2.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: DividerHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dom-divider-header', standalone: true, imports: [CommonModule, MatDividerModule], template: `
    <section class="divider">
    <mat-divider></mat-divider>
    <span> {{ label }} </span>
    <mat-divider></mat-divider>
  </section>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["section.divider{display:flex;justify-content:center;align-items:center}section.divider mat-divider{width:100%}section.divider span{margin:8px;flex-shrink:0;text-align:center}\n"] }]
        }], propDecorators: { label: [{
                type: Input,
                args: [{ required: true }]
            }] } });

class FlipContainerService {
    constructor() {
        this._isFlipped = signal(false);
    }
    flip() {
        this._isFlipped.update((value) => !value);
    }
    getFlipState() {
        return this._isFlipped;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: FlipContainerService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: FlipContainerService, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: FlipContainerService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }] });

class FlipCardComponent {
    constructor() {
        this.flip = new EventEmitter();
        this.isFlipped = inject(FlipContainerService).getFlipState();
    }
    onClick() {
        this.flip.emit();
    }
    handleKeyUp(event) {
        return event;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: FlipCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.2", type: FlipCardComponent, isStandalone: true, selector: "dom-flip-container", outputs: { flip: "flip" }, ngImport: i0, template: `
    <div
      [@flip]="isFlipped() ? 'back' : 'front'"
      (click)="onClick()"
      (keyup)="handleKeyUp($event)"
      tabindex="0">
      <div class="card-inner">
        <div class="card-front">
          <ng-content select=".front"></ng-content>
        </div>
        <div class="card-back">
          <ng-content select=".back"></ng-content>
        </div>
      </div>
    </div>
  `, isInline: true, styles: ["div{transform-style:preserve-3d;perspective:800px;cursor:pointer}.card-inner{width:100%;height:100%;transform-style:preserve-3d}.card-front,.card-back{position:absolute;width:100%;height:100%;backface-visibility:hidden}.card-front{transform:rotateY(0)}.card-back{transform:rotateY(180deg)}\n"], animations: [
            trigger("flip", [
                state("front", style({
                    transform: "rotateY(0deg)",
                })),
                state("back", style({
                    transform: "rotateY(180deg)",
                })),
                transition("front <=> back", [animate("0.5s")]),
            ]),
        ], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: FlipCardComponent, decorators: [{
            type: Component,
            args: [{ selector: "dom-flip-container", standalone: true, template: `
    <div
      [@flip]="isFlipped() ? 'back' : 'front'"
      (click)="onClick()"
      (keyup)="handleKeyUp($event)"
      tabindex="0">
      <div class="card-inner">
        <div class="card-front">
          <ng-content select=".front"></ng-content>
        </div>
        <div class="card-back">
          <ng-content select=".back"></ng-content>
        </div>
      </div>
    </div>
  `, animations: [
                        trigger("flip", [
                            state("front", style({
                                transform: "rotateY(0deg)",
                            })),
                            state("back", style({
                                transform: "rotateY(180deg)",
                            })),
                            transition("front <=> back", [animate("0.5s")]),
                        ]),
                    ], changeDetection: ChangeDetectionStrategy.OnPush, styles: ["div{transform-style:preserve-3d;perspective:800px;cursor:pointer}.card-inner{width:100%;height:100%;transform-style:preserve-3d}.card-front,.card-back{position:absolute;width:100%;height:100%;backface-visibility:hidden}.card-front{transform:rotateY(0)}.card-back{transform:rotateY(180deg)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { flip: [{
                type: Output
            }] } });

class FloatingButtonComponent {
    constructor() {
        this.side = input("right");
        this.label = input();
        this.routerLink = input();
        this.clicked = new EventEmitter();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: FloatingButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "17.2.2", type: FloatingButtonComponent, isStandalone: true, selector: "dom-floating-button", inputs: { side: { classPropertyName: "side", publicName: "side", isSignal: true, isRequired: false, transformFunction: null }, label: { classPropertyName: "label", publicName: "label", isSignal: true, isRequired: false, transformFunction: null }, routerLink: { classPropertyName: "routerLink", publicName: "routerLink", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { clicked: "clicked" }, ngImport: i0, template: `
    <button
      mat-raised-button
      [disableRipple]="true"
      color="accent"
      [style.right.px]="side() === 'left' ? null : 0"
      [style.left.px]="side() === 'right' ? null : 0"
      [style.border-top-right-radius.px]="side() === 'left' ? 25 : null"
      [style.border-bottom-right-radius.px]="side() === 'left' ? 25 : null"
      [style.border-top-left-radius.px]="side() === 'right' ? 25 : null"
      [style.border-bottom-left-radius.px]="side() === 'right' ? 25 : null"
      [routerLink]="routerLink()"
      (click)="clicked.emit()">
      {{ label() | titlecase }}
    </button>
  `, isInline: true, styles: ["button{position:fixed;top:64px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "pipe", type: i1$3.TitleCasePipe, name: "titlecase" }, { kind: "ngmodule", type: RouterModule }, { kind: "directive", type: i1$1.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2$2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: FloatingButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: "dom-floating-button", standalone: true, imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule], template: `
    <button
      mat-raised-button
      [disableRipple]="true"
      color="accent"
      [style.right.px]="side() === 'left' ? null : 0"
      [style.left.px]="side() === 'right' ? null : 0"
      [style.border-top-right-radius.px]="side() === 'left' ? 25 : null"
      [style.border-bottom-right-radius.px]="side() === 'left' ? 25 : null"
      [style.border-top-left-radius.px]="side() === 'right' ? 25 : null"
      [style.border-bottom-left-radius.px]="side() === 'right' ? 25 : null"
      [routerLink]="routerLink()"
      (click)="clicked.emit()">
      {{ label() | titlecase }}
    </button>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["button{position:fixed;top:64px}\n"] }]
        }], propDecorators: { clicked: [{
                type: Output
            }] } });

class InfoCardComponent {
    constructor() {
        this.icon = "attach_email"; // Default icon value if not provided
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: InfoCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.2", type: InfoCardComponent, isStandalone: true, selector: "dom-info-card", inputs: { text: "text", icon: "icon" }, ngImport: i0, template: `
    <section class="info-card-wrapper">
      <mat-icon color="primary">{{ icon }}</mat-icon>
      <span class="info-card-text">{{ text }}</span>
    </section>
  `, isInline: true, styles: ["section.info-card-wrapper{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:16px}section.info-card-wrapper mat-icon{scale:2}\n"], dependencies: [{ kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i1$4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.2", ngImport: i0, type: InfoCardComponent, decorators: [{
            type: Component,
            args: [{ selector: "dom-info-card", standalone: true, imports: [MatIconModule], template: `
    <section class="info-card-wrapper">
      <mat-icon color="primary">{{ icon }}</mat-icon>
      <span class="info-card-text">{{ text }}</span>
    </section>
  `, styles: ["section.info-card-wrapper{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:16px}section.info-card-wrapper mat-icon{scale:2}\n"] }]
        }], propDecorators: { text: [{
                type: Input
            }], icon: [{
                type: Input
            }] } });

function getKey(collection) {
    return collection == 'entities' ? collection : collection + 'Entities';
}
// Function to handle the success response of loading entities
function handleLoadEntitiesSuccess(state, collection) {
    return (res) => {
        const key = getKey(collection);
        const localState = state;
        const hasEntities = localState[key]()?.length > 0;
        const update = hasEntities ? setAllEntities : addEntities;
        if (key === 'entities') {
            patchState(state, update(res.content));
        }
        else {
            patchState(state, update(res.content, { collection }));
        }
    };
}
function createLoader(Loader, methodName) {
    return runInInjectionContext(inject(Injector), () => {
        const loader = inject(Loader);
        return (query) => loader[methodName](query);
    });
}
function loadEntities(loader, state, collection = 'entities') {
    return rxMethod(pipe(switchMap((query) => loader(query).pipe(tapResponse({
        next: handleLoadEntitiesSuccess(state, collection),
        error: () => EMPTY,
    })))));
}
function createSliceLoader(Loader, methodName) {
    return runInInjectionContext(inject(Injector), () => {
        const loader = inject(Loader);
        return (query) => loader[methodName](query);
    });
}
function loadSlice(loader, state, slice) {
    return rxMethod(pipe(switchMap((query) => loader(query).pipe(tapResponse({
        next: (res) => patchState(state, { [slice]: res.content }),
        error: () => EMPTY,
    })))));
}

function toCamelCase(str) {
    return str
        .split(' ') // Split the string into words
        .map((word, index) => index === 0
        ? word.toLowerCase() // Lowercase the first word
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() // Capitalize the first letter of subsequent words
    )
        .join(''); // Join the words back together
}
function loadMethod(input) {
    const camelCaseString = toCamelCase(input);
    return `load${camelCaseString}`;
}

/* eslint-disable @nx/enforce-module-boundaries */

/**
 * Generated bundle index. Do not edit.
 */

export { AutocompleteComponent, CardButtonComponent, DividerHeaderComponent, FlipCardComponent, FlipContainerService, FloatingButtonComponent, FormErrorType, FormInputComponent, InfoCardComponent, OptionContentDirective, ParallaxDirective, SearchInputComponent, createLoader, createSliceLoader, errorMessageMap, getFormKeys, handleLoadEntitiesSuccess, handleServerErrorEffect, loadEntities, loadMethod, loadSlice, setFormError };
//# sourceMappingURL=dom.mjs.map
