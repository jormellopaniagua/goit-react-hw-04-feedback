En React, los hooks (en inglés, "hooks") son funciones especiales que permiten a
los componentes funcionales acceder y manipular el estado y el ciclo de vida de
los componentes, sin necesidad de escribir una clase.

## A continuación, te presento los hooks más comunes de React:

useState: Permite agregar estado a un componente funcional. Recibe un valor
inicial y devuelve un par de valores: el estado actual y una función para
actualizarlo.

import { useState } from 'react';

## const [count, setCount] = useState(0);

useEffect: Permite ejecutar efectos secundarios (como peticiones HTTP o
actualizaciones del DOM) después de que el componente se haya renderizado.
Recibe una función que se ejecutará después de cada renderizado.

import { useState, useEffect } from 'react';

useEffect(() => { console.log('El componente se ha renderizado'); }, []);

---

useContext: Permite acceder a un contexto (un objeto que se comparte entre
componentes) en un componente funcional.

import { useContext } from 'react'; import { ThemeContext } from
'./ThemeContext';

const theme = useContext(ThemeContext); useReducer: Similar a useState, pero
para manejar estados más complejos con un reducer (una función que devuelve un
nuevo estado).

import { useReducer } from 'react';

const [state, dispatch] = useReducer(reducer, initialState); useCallback:
Permite memorizar una función para evitar que se vuelva a crear en cada
renderizado.

import { useCallback } from 'react';

const handleClick = useCallback(() => { console.log('Click!'); }, []);

useMemo: Permite memorizar un valor para evitar que se vuelva a calcular en cada
renderizado.

import { useMemo } from 'react';

const expensiveCalculation = useMemo(() => { // Cálculo costoso return result;
}, [dependencies]);

useRef: Permite crear una referencia a un elemento del DOM o a un valor que se
mantiene entre renderizados.

import { useRef } from 'react';

const inputRef = useRef(null); useImperativeHandle: Permite personalizar la
instancia de un componente funcional para que se pueda utilizar como una
instancia de una clase.

import { useImperativeHandle } from 'react';

useImperativeHandle(ref, () => ({ focus: () => { inputRef.current.focus(); },
})); useLayoutEffect: Similar a useEffect, pero se ejecuta después de que el
componente se haya renderizado y se haya aplicado el layout.

import { useLayoutEffect } from 'react';

useLayoutEffect(() => { console.log('El componente se ha renderizado y se ha
aplicado el layout'); }, []); useDebugValue: Permite mostrar un valor de
depuración en React DevTools.

import {useDebugValue } from 'react';

useDebugValue(count > 10? 'Greater than 10' : 'Less than or equal to 10');

Estos son los hooks más comunes de React, pero hay otros más especializados,
como useIntersectionObserver o useMediaQuery, que se utilizan para casos
específicos.

Recuerda que los hooks deben ser utilizados solo en componentes funcionales y no
en componentes de clase.
