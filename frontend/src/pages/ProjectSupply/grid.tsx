"use client";
import { useRef } from "react";
import { useSupply } from "./hook";
import BaseGrid, { BaseGridHandle } from "../../components/grid/BaseGrid";
import type {
  ColDef,
  GetRowIdParams,
} from "ag-grid-community";
import type { SupplyRows } from "./types";

const SupplyGrid = () => {
  const { localData, loading, addRow, updateRow, deleteRows, saveChanges } =
    useSupply();

  const baseGridRef = useRef<BaseGridHandle<SupplyRows>>(null);

  const colDefs: ColDef<SupplyRows>[] = [
    {
      field: "id",
      headerName: "ID",
      hide: true,
    },
    {
      field: "code",
      headerName: "Kod",
      editable: false,
      minWidth: 200,
    },
    {
      field: "category",
      headerName: "Kategori",
      editable: true,
      minWidth: 200,
      cellClassRules: {
        "border border-red-300": (params) => !!params.data?.isNew,
      },
    },
    {
      field: "quantityItemCode",
      headerName: "Metraj",
      editable: true,
      minWidth: 200,
      cellClassRules: {
        "border border-red-300": (params) => !!params.data?.isNew,
      },
    },
    {
      field: "companyName",
      headerName: "Şirket",
      editable: true,
      minWidth: 200,
      cellClassRules: {
        "border border-red-300": (params) => !!params.data?.isNew,
      },
    },
    {
      field: "unit",
      headerName: "Birim",
      editable: true,
      minWidth: 200,
      cellClassRules: {
        "border border-red-300": (params) => !!params.data?.isNew,
      },
    },
    {
      field: "unitPrice",
      headerName: "Birim Fiyatı",
      editable: true,
      minWidth: 200,
      type: "numberColumn",
    },
    {
      field: "quantity",
      headerName: "Metraj",
      editable: true,
      minWidth: 200,
      type: "numberColumn",
    },
    {
      field: "contractAmount",
      headerName: "Sözleşme Tutarı",
      editable: true,
      minWidth: 200,
      type: "numberColumn",
    },
    {
      field: "paidAmount",
      headerName: "Ödenen Tutar",
      editable: true,
      minWidth: 200,
      type: "numberColumn",
    },
    {
      field: "remainingAmount",
      headerName: "Kalan Tutar",
      editable: false,
      minWidth: 200,
      type: "numberColumn",
      valueGetter: (params) => {
        const contractAmount = params.data?.contractAmount ?? 0;
        const paidAmount = params.data?.paidAmount ?? 0;
        return contractAmount - paidAmount;
      },
    },
    {
      field: "status",
      headerName: "Durum",
      editable: true,
      minWidth: 200,
      cellClassRules: {
        "border border-red-300": (params) => !!params.data?.isNew,
      },
    },
    {
      field: "description",
      headerName: "Açıklama",
      editable: true,
      minWidth: 200,
    },
    {
      field: "createdBy",
      headerName: "Oluşturan Kişi",
      editable: false,
      minWidth: 200,
    },
    {
      field: "updatedBy",
      headerName: "Güncelleyen Kişi",
      editable: false,
      minWidth: 200,
    },
    {
      field: "createdatetime",
      headerName: "Oluşturulma Tarihi",
      editable: false,
      minWidth: 200,
      valueFormatter: (params) => {
        return params.value ? new Date(params.value).toLocaleString('tr-TR') : '';
      }
    },
    {
      field: "updatedatetime",
      headerName: "Güncelleme Tarihi",
      editable: false,
      minWidth: 200,
      valueFormatter: (params) => {
        return params.value ? new Date(params.value).toLocaleString('tr-TR') : '';
      }
    },
  ];

  const getRowId = (params: GetRowIdParams<SupplyRows>) => {
    if (!params.data) return '';
    return String(params.data.id || params.data.code);
  };

  return (
    <BaseGrid<SupplyRows>
      ref={baseGridRef}
      rowData={localData}
      columnDefs={colDefs}
      getRowId={getRowId}
      onAddRow={addRow}
      onDeleteRow={deleteRows}
      onSaveChanges={saveChanges}
      onCellValueChanged={updateRow}
      isLoading={loading}
      showButtons={{
        refresh: true,
        add: true,
        delete: true,
        save: true,
        bar: true,
      }}
    />
  );
};

export default SupplyGrid;
